import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>My Tech Stack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold">
          My <span class="text-blue-600">Tech</span> Stack
        </h1>
        <div className="flex flex-wrap max-w-3xl gap-3 justify-between">
            <div className="shadow rounded px-5 py-2 text-center">
                <p class="text-3xl font-semibold tracking-wider">PHP</p>
                <div class="flex flex-wrap text-xs">
                <div class="rounded-full mx-1 my-1 px-2 py-1 bg-green-200 border-green-500 text-green-600">Expert</div>
                <div class="rounded-full mx-1 my-1 px-2 py-1 bg-indigo-200 border-indigo-500 text-indigo-500">Coding since 2016</div>
                <div class="rounded-full mx-1 my-1 px-2 py-1 bg-blue-200 border-blue-500">Preferred Framework Laravel</div>
                <div class="rounded-full mx-1 my-1 px-2 py-1 bg-blue-200 border-blue-500">CI/CD For Deployment</div>
                </div>
                <p class="text-center text-gray-600 mt-2 text-sm">PHP was part of the initial languages I began learning and coding in. It's simplicity and high uptake among junior 
                    and beginning devs motivated me into the world of web development. I initially began with single php files and slowly upgraded towards the Laravel Framework. </p>            
            </div>
            <div className="shadow rounded px-5 py-2 text-center">
                <p class="text-3xl font-semibold tracking-wider">Javascript</p>
                <div class="flex flex-wrap text-xs text-blue-600">
                <div class="rounded-full mx-1 my-1 px-2 py-1 bg-yellow-100 border-yellow-500 text-yellow-600">Intermediate</div>
                <div class="rounded-full mx-1 my-1 px-2 py-1 bg-indigo-200 border-indigo-500 text-indigo-500">Coding since 2018</div>
                <div class="rounded-full mx-1 my-1 px-2 py-1 bg-blue-200 border-blue-500">Mainly frontend for VueJs</div>
                <div class="rounded-full mx-1 my-1 px-2 py-1 bg-blue-200 border-blue-500">Preferred Backend Framework AdonisJs</div>
                </div>            
            </div>
            <div className="shadow rounded px-5 py-2 text-center">
                <p class="text-3xl font-semibold tracking-wider">Java</p>
                <div class="flex flex-wrap text-sm text-blue-600">
                <div class="rounded-full mx-2 my-1 px-2 py-1 bg-blue-200 border-blue-500">Intermediate</div>
                <div class="rounded-full mx-2 my-1 px-2 py-1 bg-blue-200 border-blue-500">Coding between 2017 - 2019</div>
                <div class="rounded-full mx-2 my-1 px-2 py-1 bg-blue-200 border-blue-500">Part of my University Course</div>
                <div class="rounded-full mx-2 my-1 px-2 py-1 bg-blue-200 border-blue-500">Mainly used for Android Applications</div>
                </div>            
            </div>
        </div>
      </main>
    </div>
  )
}
