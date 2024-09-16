import { Prisma, PrismaClient } from '@prisma/client/edge'
import { Hono } from 'hono'
import { withAccelerate } from '@prisma/extension-accelerate'
import { verify } from 'hono/jwt';
import { createBlogInput, updateBlogInput } from '@pankajkumardev/medium-common';


export const blogRouter = new Hono<{
  Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
  },    
  Variables: {
      userId?: string;
  };
}>();

blogRouter.use('/*', async(c,next) => {
    
    const authHeader =  c.req.header('Authorization') || "";
    if (!authHeader) {
      return c.json({ error: 'Authorization header missing' });
    }
    const token = authHeader.split(' ')[1];
    const user= await verify(token,  c.env.JWT_SECRET);

    try {
      c.set("userId",String(user.id));
        await next();
      } catch(e) {
        c.status(403)
        return c.json({ error: 'Unauthorized' });
      }  
  })

  blogRouter.post('/', async(c) => {
    const prisma = new PrismaClient({
      datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const authorId = c.get("userId")
    const body = await c.req.json()
    const {success } = createBlogInput.safeParse(body);
    if(!success) {
      c.status(403)
      return  c.json({
        error: 'Incorrect Inputs',
      })
    }
    const blog  = await prisma.post.create({
      data: {
        id : body.id,
        title: body.title,
        content: body.content,
        authorId : String(authorId)
      },
    })

    return c.json({id : blog.id})
  })
  
  blogRouter.put('/', async(c) =>{
    const prisma = new PrismaClient({
      datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const body = await c.req.json()
    const {success } = updateBlogInput.safeParse(body);
    if(!success) {
      c.status(403)
      return  c.json({
        error: 'Incorrect Inputs',
      })
    }
    const blog  = await prisma.post.update({
      where : { id : body.id},
        data: {
          title: body.title,
          content: body.content,
      },
    })
    return c.json({id : blog.id})
  })
  
//pagination
blogRouter.get('/bulk',async (c) => {

  const prisma = new PrismaClient({
    datasourceUrl : c.env.DATABASE_URL,
  }).$extends(withAccelerate())

  const blogs = await prisma.post.findMany();
  return c.json({blogs}) 
})

  blogRouter.get('/:id' ,async(c) => {
    const prisma = new PrismaClient({
      datasourceUrl : c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const id = await c.req.param("id");
    try {
      const blog  = await prisma.post.findFirst({
        where: {
          id : id
        },
      })
      return c.json({blog})
    } catch (e) {
      c.status(411);
      return c.json({
        message : "Error While fetching Blog Post"
      })
    }
  })
  
