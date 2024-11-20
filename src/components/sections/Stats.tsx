import SectionHeading from "../SectionHeading"

const stats = [
    {
        name: 'Monthly visitors on the site',
        value: '20k',
    },
    {
        name: 'Monthly CDN requests',
        value: '30k',
    },
    {
        name: 'Weekly downloads',
        value: '500k',
    },
    {
        name: 'GitHub stars',
        value: '19K',
    },
    {
        name: 'Dependent projects',
        value: '3K+',
    },
  ]
  
  export default function Stats() {
    return (
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-8xl lg:max-w-none">
            <div className="flex justify-between">
              <SectionHeading type='primary'>Why Choose Edulinkx?</SectionHeading>
              <p className="mt-4 text-right max-w-1/2 lg:max-w-[50%] text-2xl leading-8 text-zinc-400">
              EduLinkx provides decentralized, verifiable credentials for learners, supports instructors with secure, profitable engagement, and bridges education to employment through tokenized rewards. Below are the expected metrics.
              </p>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 text-center sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-2">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col border-zinc-700 border py-4 rounded-xl">
                  <p className="my-4 text-6xl font-semibold text-brand-200">{stat.value}</p>
                  <p className="text-md leading-6 text-gray-400">{stat.name}</p>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  