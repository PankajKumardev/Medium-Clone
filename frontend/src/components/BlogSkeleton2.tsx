    const BlogSkeleton2 = () => {
  return (
    <div className='mt-20 flex justify-start ml-44'>
        
        <div
            role="status"
            className="space-y-2.5 animate-pulse w-1/2 max-w-3xl"
          >
            <div className="flex items-center w-full">
              <div className="h-2.5 bg-gray-200 rounded-full w-72"></div>
              <div className="h-2.5 ms-2 bg-gray-300 rounded-full  w-24"></div>
              <div className="h-2.5 ms-2 bg-gray-300 rounded-full  w-60"></div>
            </div>
            <div className="flex items-center w-full max-w-[580px]">
              <div className="h-2.5 bg-gray-200 rounded-full w-full"></div>
              <div className="h-2.5 ms-2 bg-gray-300 rounded-full  w-full"></div>
              <div className="h-2.5 ms-2 bg-gray-300 rounded-full  w-24"></div>
            </div>
            <div className="flex items-center w-full max-w-[400px]">
              <div className="h-2.5 bg-gray-300 rounded-full  w-full"></div>
              <div className="h-2.5 ms-2 bg-gray-200 rounded-full w-80"></div>
              <div className="h-2.5 ms-2 bg-gray-300 rounded-full  w-full"></div>
            </div>
            <div className="flex items-center w-full max-w-[580px]">
              <div className="h-2.5 ms-2 bg-gray-200 rounded-full w-full"></div>
              <div className="h-2.5 ms-2 bg-gray-300 rounded-full  w-full"></div>
              <div className="h-2.5 ms-2 bg-gray-300 rounded-full  w-24"></div>
            </div>
            <div className="flex items-center w-full max-w-[440px]">
              <div className="h-2.5 ms-2 bg-gray-300 rounded-full  w-32"></div>
              <div className="h-2.5 ms-2 bg-gray-300 rounded-full  w-24"></div>
              <div className="h-2.5 ms-2 bg-gray-200 rounded-full w-full"></div>
            </div>
            <div className="flex items-center w-full max-w-[460px]">
              <div className="h-2.5 ms-2 bg-gray-300 rounded-full  w-full"></div>
              <div className="h-2.5 ms-2 bg-gray-200 rounded-full w-80"></div>
              <div className="h-2.5 ms-2 bg-gray-300 rounded-full  w-full"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
          <div>
            <div role="status" className="animate-pulse">
              <div className="p-4 pb-3 w-96 ml-36 border-gray-300 cursor-pointer">
                <div className="flex items-center gap-2 ">
                  <div className="h-6 w-6 bg-gray-200 rounded-full mb-3"></div>

                  <div className=" bg-gray-200 rounded-full w-20 h-5 max-w-[200px] mb-2.5"></div>

                  <div className="h-2 bg-gray-200 rounded-full  max-w-[330px] mb-2.5"></div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full   mb-2.5"></div>
                <div className="font-light text-md">
                  <div className="h-2 bg-gray-200 rounded-full   mb-2.5"></div>
                </div>
                <div className="h-2 bg-gray-200 rounded-full w-full   mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full w-full mb-2.5"></div>
              </div>
              <span className="sr-only">Loading...</span>
            </div>
          </div>

        </div>
        
  )
}

export default BlogSkeleton2