export default function loading() {
  return (
    <>
            <section className="pt-8 bg-white dark:bg-gray-900">
                <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
                    <div className="mx-auto text-center">
                        <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Reel Insights</h2>
                        <p className="mb-5 font-light text-sm text-gray-500 dark:text-gray-400">Until Today</p>
                        <div className="max-w-screen-xl mx-auto text-center px-8 mb-5">
                            <dl className="grid gap-4 px-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
                                <div className="flex flex-col items-center justify-center">
                                    <svg className="mb-2 w-5 h-5 text-gray-800 md:w-6 md:h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z"/>
                                    </svg>
                                    <dt className="text-xl md:text-2xl font-extrabold animate-pulse">
                                        <div className="flex items-center w-full py-2">
                                            <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-12"></div>
                                            <div className="h-5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-12"></div>
                                        </div>
                                    </dt>
                                    <dd className="font-light text-gray-500 dark:text-gray-400">Creation Time</dd>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <svg className="mb-2 w-5 h-5 text-gray-800 md:w-6 md:h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                        <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
                                    </svg>
                                    <dt className="text-xl md:text-2xl font-extrabold animate-pulse py-2"><div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-12"></div></dt>
                                    <dd className="font-light text-gray-500 dark:text-gray-400">Likes</dd>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <svg className="mb-2 w-5 h-5 text-gray-800 md:w-6 md:h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" fill="currentColor">
                                        <path d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z" fill="currentColor"/>
                                        <path d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z" fill="currentColor"/>
                                    </svg>
                                    <dt className="text-xl md:text-2xl font-extrabold animate-pulse py-2"><div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-12"></div></dt>
                                    <dd className="font-light text-gray-500 dark:text-gray-400">Comments</dd>
                                </div>
                            </dl>
                        </div>
                        <div className="max-w-screen-xl mx-auto text-center px-8">
                            <dl className="grid gap-4 px-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
                                <div className="flex flex-col items-center justify-center">
                                    <svg className="mb-2 w-5 h-5 text-gray-800 md:w-6 md:h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                                        <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                                    </svg>
                                    <dt className="text-xl md:text-2xl font-extrabold animate-pulse py-2"><div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-12"></div></dt>
                                    <dd className="font-light text-gray-500 dark:text-gray-400">Views</dd>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <svg className="mb-2 w-5 h-5 text-gray-800 md:w-6 md:h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 16">
                                        <path d="M0 .984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L1.506.139A1 1 0 0 0 0 .984Z"/>
                                    </svg>
                                    <dt className="text-xl md:text-2xl font-extrabold animate-pulse py-2"><div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-12"></div></dt>
                                    <dd className="font-light text-gray-500 dark:text-gray-400">Plays</dd>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <svg className="mb-2 w-5 h-5 text-gray-800 md:w-6 md:h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 12 16">
                                        <path d="M11 0a1 1 0 0 0-1 1v5.7a2.028 2.028 0 0 0-.177-.194L3.33.732A2 2 0 0 0 0 2.227v11.546A1.977 1.977 0 0 0 1.181 15.6a1.982 1.982 0 0 0 2.147-.33l6.5-5.773A1.88 1.88 0 0 0 10 9.3V15a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1Z"/>
                                    </svg>
                                    <dt className="text-xl md:text-2xl font-extrabold animate-pulse py-2"><div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-12"></div></dt>
                                    <dd className="font-light text-gray-500 dark:text-gray-400">Duration</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                        <div className="flex flex-col p-6 text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h2 className="mb-8 text-4xl text-center tracking-tight font-extrabold text-gray-900 dark:text-white">Caption</h2>
                            <p className="text-gray-700 sm:text-lg dark:text-gray-200">
                              <div role="status" className="max-w-sm animate-pulse">
                                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[280px] mb-2.5"></div>
                                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[240px] mb-2.5"></div>
                                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px]"></div>
                                <span className="sr-only">Loading...</span>
                            </div>
                          </p>
                        </div>
                        <div className="flex flex-col p-6 text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Owner</h2>
                                <div className="text-center text-gray-500 dark:text-gray-400 animate-pulse">
                                    <svg className="mx-auto w-20 h-20 mb-4 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                    </svg>
                                    <h3 className="flex justify-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                      <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                                    </h3>
                                    <p className="flex justify-center"><div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4"></div></p>
                                    <ul className="flex justify-center mt-6 space-x-4">
                                        <li>
                                            <div className="flex flex-col items-center justify-center">
                                                <p className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Publications</p>
                                                <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-white"><div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-12"></div></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex flex-col items-center justify-center">
                                                <p className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Followers</p>
                                                <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-white"><div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-12"></div></p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex flex-col items-center justify-center">
                                                <p className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Verified</p>
                                                <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                                                  <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-10"></div>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                        </div>
                        <div className="flex flex-col p-6 text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Tagged Users</h2>
                            <ul className="flex flex-wrap justify-center mt-6 space-x-4 animate-pulse">
                              <li>
                                <div className="flex flex-col items-center justify-center mb-2">
                                    <svg className="w-12 h-12 me-3 mb-2 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                    </svg>
                                    <p>
                                        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2"></div>
                                    </p>
                                </div>
                              </li>
                              <li>
                                <div className="flex flex-col items-center justify-center mb-2">
                                    <svg className="w-12 h-12 me-3 mb-2 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                    </svg>
                                    <p>
                                        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2"></div>
                                    </p>
                                </div>
                              </li>
                              <li>
                                <div className="flex flex-col items-center justify-center mb-2">
                                    <svg className="w-12 h-12 me-3 mb-2 text-gray-200 dark:text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                                    </svg>
                                    <p>
                                        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-20 mb-2"></div>
                                    </p>
                                </div>
                              </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-4 px-4 mx-auto max-w-screen-xl lg:py-8 lg:px-6">
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
                        <div className="flex flex-col p-6 items-center text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Downloader</h2>
                            <div className="flex items-center justify-center w-full h-full bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>

                        </div>
                        <div className="flex flex-col p-6 items-center text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Thumbnails</h2>
                            <div className="flex items-center justify-center max-w-full h-full bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                    <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                                </svg>
                            </div>
                            
                        </div>
                        <div className="flex flex-col p-6 items-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Comments</h2>
                            <div className="max-w-md mx-auto">
                              <div role="status" className="max-w-md p-4 space-y-4 divide-y divide-gray-200 animate-pulse dark:divide-gray-700 md:p-6">
                                  <div className="flex items-center justify-between">
                                      <div>
                                          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                          <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                      </div>
                                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                                  </div>
                                  <div className="flex items-center justify-between pt-4">
                                      <div>
                                          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                          <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                      </div>
                                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                                  </div>
                                  <div className="flex items-center justify-between pt-4">
                                      <div>
                                          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                          <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                      </div>
                                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                                  </div>
                                  <div className="flex items-center justify-between pt-4">
                                      <div>
                                          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                          <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                      </div>
                                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                                  </div>
                                  <div className="flex items-center justify-between pt-4">
                                      <div>
                                          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                          <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                      </div>
                                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                                  </div>
                                  <span className="sr-only">Loading...</span>
                              </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
  )
}