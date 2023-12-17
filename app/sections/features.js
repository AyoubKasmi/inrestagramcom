import Link from "next/link"


export default function Features() {
  return (
    <section id="features" className="pb-8 bg-white dark:bg-gray-900">
        <div className="px-6 mx-auto max-w-screen-xl md:min-h-screen lg:px-4">
            <div className="flex justify-center text-center pt-10 md:p-6 mb-8 md:mb-10">
                <h2 className="text-4xl md:text-6xl tracking-tight font-extrabold text-gray-900 dark:text-white">Features</h2>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                <div className="flex flex-col justify-center items-center ">
                    <div className="flex justify-center items-center mb-4 w-20 h-20 lg:w-24 lg:h-24 md:w-24 md:h-24 rounded-full bg-blue-100 dark:bg-blue-900">
                        <svg className="w-10 h-10 lg:w-12 lg:h-12 text-blue-600 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                            <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                        </svg>
                    </div>
                    <h3 className="py-4 md:py-6 text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">Reels Downloader</h3>
                    <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">Download Instagram Reels effortlessly by entering the link, and instantly receive a download link for your chosen content—streamlining your experience with seamless, efficient content access.</p>
                </div>
                <div className="flex flex-col justify-center items-center ">
                    <div className="flex justify-center items-center mb-4 w-20 h-20 lg:w-24 lg:h-24 md:w-24 md:h-24 rounded-full bg-blue-100 dark:bg-blue-900">
                        <svg className="w-10 h-10 lg:w-12 lg:h-12 text-blue-600 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                        </svg>
                    </div>
                    <h3 className="py-4 md:py-6 text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">Thumbnails Scrapper</h3>
                    <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">Explore Instagram Reel thumbnails in various sizes, providing you with a visual preview of the content you desire. Effortlessly select the perfect thumbnail to enhance your content-sharing experience.</p>
                </div>
                <div className="flex flex-col justify-center items-center ">
                    <div className="flex justify-center items-center mb-4 w-20 h-20 lg:w-24 lg:h-24 md:w-24 md:h-24 rounded-full bg-blue-100 dark:bg-blue-900">
                        <svg className="w-10 h-10 lg:w-12 lg:h-12 text-blue-600 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" fill="currentColor">
                            <path d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z" fill="currentColor"/>
                            <path d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z" fill="currentColor"/>
                        </svg>
                    </div>
                    <h3 className="py-4 md:py-6 text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">Comments Picker</h3>
                    <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">Elevate engagement with our Comments Picker, allowing you to randomly select captivating comments for your Instagram Reels. Enhance your content's interaction and create a dynamic, engaging online presence.</p>
                </div>
            </div>
        </div>
    </section>
  )
}