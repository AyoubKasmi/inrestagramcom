import {
    formatTimestamp,
    formatTimestampWithMonthAndSeconds,
    formatVideoDuration,
    truncateText,
    formatNumberWithSpaces
} from '@/app/utils';
import Image from 'next/image';
import DownloadButton from '@/app/components/downloadButton';
import ErrorComponent from '@/app/sections/error';

export async function generateMetadata({ params }) {
    return {
        title: `${params.post}`,
        alternates: {
            canonical: `/post/${params.post}`,
        },
    }
}

export default async function page({params}) {
    
    const response = await fetch(`${process.env.URL}/api/instapost`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ post: params.post }),
    });

    if (response.status !== 200) {
        return (
            <ErrorComponent />
        )
    }
    
    const { data } = await response.json();

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
                                    <dt className="text-xl md:text-2xl font-extrabold">{formatTimestamp(data.taken_at_timestamp * 1000)}</dt>
                                    <dd className="font-light text-gray-500 dark:text-gray-400">Creation Time</dd>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <svg className="mb-2 w-5 h-5 text-gray-800 md:w-6 md:h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                        <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
                                    </svg>
                                    <dt className="text-xl md:text-2xl font-extrabold">{formatNumberWithSpaces(data.edge_media_preview_like.count)}</dt>
                                    <dd className="font-light text-gray-500 dark:text-gray-400">Likes</dd>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <svg className="mb-2 w-5 h-5 text-gray-800 md:w-6 md:h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 18" fill="currentColor">
                                        <path d="M18 4H16V9C16 10.0609 15.5786 11.0783 14.8284 11.8284C14.0783 12.5786 13.0609 13 12 13H9L6.846 14.615C7.17993 14.8628 7.58418 14.9977 8 15H11.667L15.4 17.8C15.5731 17.9298 15.7836 18 16 18C16.2652 18 16.5196 17.8946 16.7071 17.7071C16.8946 17.5196 17 17.2652 17 17V15H18C18.5304 15 19.0391 14.7893 19.4142 14.4142C19.7893 14.0391 20 13.5304 20 13V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4Z" fill="currentColor"/>
                                        <path d="M12 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V9C0 9.53043 0.210714 10.0391 0.585786 10.4142C0.960859 10.7893 1.46957 11 2 11H3V13C3 13.1857 3.05171 13.3678 3.14935 13.5257C3.24698 13.6837 3.38668 13.8114 3.55279 13.8944C3.71889 13.9775 3.90484 14.0126 4.08981 13.996C4.27477 13.9793 4.45143 13.9114 4.6 13.8L8.333 11H12C12.5304 11 13.0391 10.7893 13.4142 10.4142C13.7893 10.0391 14 9.53043 14 9V2C14 1.46957 13.7893 0.960859 13.4142 0.585786C13.0391 0.210714 12.5304 0 12 0Z" fill="currentColor"/>
                                    </svg>
                                    <dt className="text-xl md:text-2xl font-extrabold">{formatNumberWithSpaces(data.edge_media_preview_comment.count)}</dt>
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
                                    <dt className="text-xl md:text-2xl font-extrabold">{data.is_video?formatNumberWithSpaces(data.video_view_count):'XX'}</dt>
                                    <dd className="font-light text-gray-500 dark:text-gray-400">Views</dd>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <svg className="mb-2 w-5 h-5 text-gray-800 md:w-6 md:h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 16">
                                        <path d="M0 .984v14.032a1 1 0 0 0 1.506.845l12.006-7.016a.974.974 0 0 0 0-1.69L1.506.139A1 1 0 0 0 0 .984Z"/>
                                    </svg>
                                    <dt className="text-xl md:text-2xl font-extrabold">{data.is_video?formatNumberWithSpaces(data.video_play_count):'XX'}</dt>
                                    <dd className="font-light text-gray-500 dark:text-gray-400">Plays</dd>
                                </div>
                                <div className="flex flex-col items-center justify-center">
                                    <svg className="mb-2 w-5 h-5 text-gray-800 md:w-6 md:h-6 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 12 16">
                                        <path d="M11 0a1 1 0 0 0-1 1v5.7a2.028 2.028 0 0 0-.177-.194L3.33.732A2 2 0 0 0 0 2.227v11.546A1.977 1.977 0 0 0 1.181 15.6a1.982 1.982 0 0 0 2.147-.33l6.5-5.773A1.88 1.88 0 0 0 10 9.3V15a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1Z"/>
                                    </svg>
                                    <dt className="text-xl md:text-2xl font-extrabold">{data.is_video?formatVideoDuration(data.video_duration):'XX'}</dt>
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
                            <p className="text-gray-700 sm:text-lg dark:text-gray-200">{data.edge_media_to_caption.edges.length > 0 ? data.edge_media_to_caption.edges[0].node.text: '<No Caption>'}</p>
                        </div>
                        <div className="flex flex-col p-6 text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Owner</h2>
                                <div className="text-center text-gray-500 dark:text-gray-400">
                                    <a href={data.owner.profile_pic_url} target='_blank'>
                                        <Image width={144} height={144} className="mx-auto mb-4 rounded-full" src={data.owner.profile_pic_url} alt={`@${data.owner.username}`}/>
                                    </a>
                                    <h3 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <a href={`https://www.instagram.com/${data.owner.username}`} target='_blank'>{data.owner.full_name}</a>
                                    </h3>
                                    <p>@{data.owner.username}</p>
                                    <ul className="flex justify-center mt-6 space-x-4">
                                        <li>
                                            <div className="flex flex-col items-center justify-center">
                                                <p className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Publications</p>
                                                <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">{formatNumberWithSpaces(data.owner.edge_owner_to_timeline_media.count)}</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex flex-col items-center justify-center">
                                                <p className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Followers</p>
                                                <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">{formatNumberWithSpaces(data.owner.edge_followed_by.count)}</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex flex-col items-center justify-center">
                                                <p className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Verified</p>
                                                <p className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                                                    { data.owner.is_verified ? 
                                                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                        <path className="text-[#42a5f5]" d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"/>
                                                        <path fill='#fff' d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"/>
                                                    </svg>
                                                    :
                                                    "No"
                                                    }
                                                    
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                        </div>
                        <div className="flex flex-col p-6 text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Tagged Users</h2>
                            <ul className="flex flex-wrap justify-center mt-6 space-x-4">
                                { data.edge_media_to_tagged_user.edges.map(
                                    u => {
                                        return (
                                        <li key={u.node.user.id}>
                                            <div className="flex flex-col items-center justify-center mb-2">
                                                <a className="relative" href={`https://www.instagram.com/${u.node.user.username}`} target='_blank'>
                                                    <Image width={72} height={72} className="mx-auto rounded-full" src={u.node.user.profile_pic_url} alt={`@${u.node.user.username}`}/>
                                                    { u.node.user.is_verified &&
                                                        <span className="absolute bottom-0 right-0">
                                                            <svg className="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                                                <path className="text-[#42a5f5]" d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"/>
                                                                <path fill='#fff' d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"/>
                                                            </svg>
                                                        </span>
                                                    }
                                                </a>
                                                <p className="text-gray-900 dark:text-white">
                                                <a href={`https://www.instagram.com/${u.node.user.username}`} target='_blank'>
                                                    <svg className="inline w-4 h-4 mr-1 pb-[2px]" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                                    </svg>{`${u.node.user.username}`}
                                                </a>
                                                </p>
                                            </div>
                                        </li>)
                                    }
                                )
                                }
                                
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
                            
                            {
                                data.is_video ?
                                <>
                                <div className="relative">
                                    <div className="relative">
                                        <Image className='mb-6 rounded-lg' width={640} height={1136} alt={'reel display'} src={data.display_url}/>
                                        <div className="absolute inset-0 bg-gray-500 opacity-25"></div>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center drop-shadow-md">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="#fff" // Replace with the desired color
                                            height="60px"
                                            width="60x"
                                            viewBox="0 0 24 24"
                                        >
                                        <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                                <DownloadButton type={'video'} extension={'mp4'} link={data.video_url} name={data.owner.username} className={"w-36 font-medium rounded-lg me-2 px-4 py-2.5 inline-flex justify-center text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"}/>
                                </>
                                :
                                <>
                                <div className="relative">
                                    <div className="relative">
                                        <Image className='mb-6 rounded-lg' width={640} height={1136} alt={'dummy display'} src={"https://dummyimage.com/640x1136/5a5a61/fff&text=XinstagramX"}/>
                                        <div className="absolute inset-0 bg-gray-500 opacity-25"></div>
                                    </div>
                                    <div className="absolute inset-0 flex items-center justify-center drop-shadow-md">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="#fff" // Replace with the desired color
                                            height="60px"
                                            width="60x"
                                            viewBox="0 0 24 24"
                                        >
                                        <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                                <button className="disabled w-36 font-medium rounded-lg me-2 px-4 py-2.5 inline-flex justify-center text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800"></button>
                                </>
                            }

                        </div>
                        <div className="flex flex-col p-6 items-center text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Thumbnails</h2>
                            <Image className='mb-6 rounded-lg' width={640} height={1136} alt={'reel thumbs'} src={data.display_url}/>
                            <div className='flex flex-rox justify-center gap-4'>
                                <DownloadButton selectform={data.display_resources} type = {'image'} extension={'jpg'} link={data.display_resources[0].src} name={data.owner.username} className={"w-32 font-medium rounded-lg me-2 px-4 py-2.5 inline-flex justify-center text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800"}/>
                            </div>
                            
                        </div>
                        <div className="flex flex-col p-6 items-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h2 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Comments</h2>
                            <div className="max-w-md mx-auto">
                            {
                                data.edge_media_to_parent_comment.edges.slice(0, 3).map( c => {
                                    return (
                                        <div key={c.node.id} className="text-sm py-4 px-6 mb-2 bg-slate-50 rounded-lg dark:bg-gray-900">
                                            <div className="flex justify-between items-center mb-2">
                                                <div className="flex items-center mr-3">
                                                    <p className="inline-flex items-center text-gray-900 dark:text-white font-semibold">
                                                        <Image 
                                                            width={24}
                                                            height={24}
                                                            className="mr-1 rounded-full"
                                                            src={c.node.owner.profile_pic_url}
                                                            alt={`@${c.node.owner.username}`}
                                                        />{c.node.owner.username}
                                                    </p>
                                                </div>
                                                <p className="flex justify-end text-xs text-gray-600 dark:text-gray-400">
                                                    {formatTimestampWithMonthAndSeconds(c.node.created_at * 1000)}
                                                </p>
                                            </div>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                {truncateText(c.node.text, 200)}
                                            </p>
                                            <div className='flex justify-end items-center text-gray-500 dark:text-gray-400'>
                                                <div className='flex items-center'>
                                                    {formatNumberWithSpaces(c.node.edge_liked_by.count)}
                                                    <svg className="inline ms-1 mr-2 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                                                        <path d="M17.947 2.053a5.209 5.209 0 0 0-3.793-1.53A6.414 6.414 0 0 0 10 2.311 6.482 6.482 0 0 0 5.824.5a5.2 5.2 0 0 0-3.8 1.521c-1.915 1.916-2.315 5.392.625 8.333l7 7a.5.5 0 0 0 .708 0l7-7a6.6 6.6 0 0 0 2.123-4.508 5.179 5.179 0 0 0-1.533-3.793Z"/>
                                                    </svg>
                                                </div>
                                                <div className='flex items-center'>
                                                    {formatNumberWithSpaces(c.node.edge_threaded_comments.count)}
                                                    <svg className="inline ms-1 w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 16">
                                                        <path d="M12.5 3.046H10v-.928A2.12 2.12 0 0 0 8.8.164a1.828 1.828 0 0 0-1.985.311l-5.109 4.49a2.2 2.2 0 0 0 0 3.24L6.815 12.7a1.83 1.83 0 0 0 1.986.31A2.122 2.122 0 0 0 10 11.051v-.928h1a2.026 2.026 0 0 1 2 2.047V15a.999.999 0 0 0 1.276.961A6.593 6.593 0 0 0 12.5 3.046Z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

