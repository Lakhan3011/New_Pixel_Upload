import bgimage from "../image/data.svg";
import img from "../image/upload.png";

function upload() {
  return (
    <div>
      <div
        className="relative flex min-h-screen items-center justify-center bg-gray-500 bg-cover bg-no-repeat px-4 py-12 sm:px-6 lg:px-8"
        style={{
          background:
            "url(https://images.unsplash.com/photo-1621243804936-775306a8f2e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
        }}
      >
        <div className="absolute inset-0 z-0 bg-black opacity-60"></div>
        <div className="z-10 w-full rounded-xl bg-white p-10 sm:max-w-lg">
          <div className="text-center">
            <h2 className="mt-5 text-3xl font-bold text-gray-900">
              Upload your image🖼️
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Create your memories with PIXEL
            </p>
          </div>
          <form className="mt-8 space-y-3" action="#" method="POST">
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold tracking-wide text-gray-500">
                Title
              </label>
              <input
                className="rounded-lg border border-gray-300 p-2 text-base focus:border-indigo-500 focus:outline-none"
                type=""
                placeholder="mail@gmail.com"
              />
            </div>
            <div className="grid grid-cols-1 space-y-2">
              <label className="text-sm font-bold tracking-wide text-gray-500">
                Attach Document
              </label>
              <div className="flex w-full items-center justify-center">
                <label className="group flex h-60 w-full flex-col rounded-lg border-4 border-dashed p-10 text-center">
                  <div className="flex h-full w-full flex-col items-center justify-center text-center">
                    -
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-blue-400 group-hover:text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <div className="mx-auto -mt-10 flex max-h-48 w-2/5 flex-auto">
                      <img
                        className=" h-36  object-center"
                        src={bgimage.src}
                        alt=" image"
                      />
                    </div>
                    <p className="pointer-none text-gray-500">
                      <span className="text-sm">Drag and drop</span> your image
                      here <br />
                      or{" "}
                      <a
                        href=""
                        id=""
                        className="text-blue-600 hover:underline"
                      >
                        select a file{" "}
                      </a>
                      from your computer
                    </p>
                  </div>
                  <input type="file" className="hidden" />
                </label>
              </div>
            </div>
            <p className="text-sm text-gray-300">
              <span>File type: Only images (JPEG, PNG, JPG)</span>
            </p>
            <div>
              <button
                type="submit"
                className="focus:shadow-outline my-5 flex w-full cursor-pointer justify-center rounded-lg bg-blue-500 p-4 font-semibold tracking-wide text-gray-100 shadow-lg transition duration-300 ease-in hover:bg-blue-600 focus:outline-none"
              >
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default upload;
