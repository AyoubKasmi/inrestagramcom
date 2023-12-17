import Link from "next/link"

export const metadata = {
    title: 'Privacy Policy',
    alternates: {
        canonical: '/privacy-policy',
    },
}

export default function page() {
    return (
      <section className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
              <div className="max-w-screen-lg py-6 text-gray-500 sm:text-lg dark:text-gray-400">
                  <h1 className="mb-4 text-4xl md:text-6xl tracking-tight font-bold text-gray-900 dark:text-white">Privacy Policy</h1>
                  <p className="mb-4 text-sm md:text-base font-light">Last updated: <time dateTime={new Date('2023/12/18')}>{new Date('2023/12/18').toLocaleDateString()}</time></p>             
              </div>
              <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                  <h2 className="mb-2 text-xl md:text-3xl tracking-tight font-bold text-gray-900 dark:text-white">Information Collection and Use</h2>
                  <p className="mb-8">We collect limited information when you use our Service to obtain insights into Instagram reels. We do not ask for personal information, user accounts, or login credentials. The only data we collect is the Instagram reel link provided by you.</p>
  
                  <h2 className="mb-2 text-xl md:text-3xl tracking-tight font-bold text-gray-900 dark:text-white">Types of Data Collected</h2>
                  <h3 className="mb-2 text-lg tracking-tight font-bold text-gray-900 dark:text-white">Reel Link Data</h3>
                  <p className="mb-8">When you input an Instagram reel link into our Service, we collect and process the link to provide you with insights into the specified reel. This information includes details such as creation time, likes, and views associated with the provided reel link.</p>
  
                  <h2 className="mb-2 text-xl md:text-3xl tracking-tight font-bold text-gray-900 dark:text-white">Use of Data</h2>
                  <p className="mb-8">We use the collected reel link data solely for the purpose of providing insights into the specified Instagram reel. We do not store or track individual user data.</p>
  
                  <h2 className="mb-2 text-xl md:text-3xl tracking-tight font-bold text-gray-900 dark:text-white">Security of Data</h2>
                  <p className="mb-8">The security of your reel link data is important to us. While we strive to use commercially acceptable means to protect the data, please be aware that the transmission of information over the internet is not completely secure, and we cannot guarantee its absolute security.</p>
  
                  <h2 className="mb-2 text-xl md:text-3xl tracking-tight font-bold text-gray-900 dark:text-white">Third-party Services</h2>
                  <p className="mb-8">We may use third-party services to facilitate the provision of insights, but these services are solely utilized for the functionality of the Service. We do not share or disclose individual reel link data with third parties.</p>
  
                  <h2 className="mb-2 text-xl md:text-3xl tracking-tight font-bold text-gray-900 dark:text-white">Changes to This Privacy Policy</h2>
                  <p className="mb-2">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
                  <p className="mb-2">We will let you know via a notice on our website, and update the "Last updated" date at the top of this Privacy Policy.</p>
                  <p className="mb-8">You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
  
                  <h2 className="mb-2 text-xl md:text-3xl tracking-tight font-bold text-gray-900 dark:text-white">Contact Us</h2>
                  <p className="mb-2">If you have any questions about this Privacy Policy, please contact us:</p>
                  <Link href="/contact" className="inline-flex text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm md:text-base px-5 md:px-6 py-2.5 md:py-4 text-center dark:focus:ring-blue-900 my-4">Contact Page</Link>
              </div>
          </div>
      </section>
    )
}
  