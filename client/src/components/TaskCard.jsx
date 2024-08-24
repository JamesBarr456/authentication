

export const TaskCard = () => {
  return (
    <div className="h-screen max-w-2xl mx-auto mt-24 space-y-20">
        <div className="max-w-screen-md md:w-3/4 mx-auto">
            <div className="inline-flex flex-col space-y-2 items-center justify-end flex-1 h-full p-4 bg-blue-800 rounded-xl">
                <p className="w-full text-2xl font-semibold text-white">Dark variant</p>
                <p className="w-full pb-8 text-sm tracking-wide leading-tight text-white">Card layouts can vary to support the types of content they contain. The following elements are commonly found among that variety.</p>
                <div className="rounded mr-auto">
                    <div className="opacity-95 border rounded-lg border-white px-4">
                        <p className="m-auto inset-0 text-sm font-medium leading-normal text-center text-white py-2">Buy Now</p>
                    </div>
                </div>
            </div>
        </div>
     </div>

  )
}
