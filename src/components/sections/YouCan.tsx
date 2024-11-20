import SectionHeading from "../SectionHeading"
import TextWithCheckIcon from "../TextWithCheckIcon"

const stats = [
    'Learn and Earn: Get token rewards for progress, participation, and guiding others',
    'Cross-Chain Verified Credentials: Secure, portable, and instantly accessible across networks.',
    'Decentralized Quality Control: Empowering communities to create and curate content collaboratively',
    'Peer-to-Peer Mentoring: Enable secure, real-time learning through direct connections.',
    'Discover a marketplace for exclusive educational NFTs that enhance learning',
    'Universally accessible, verifiable credentials for seamless remote work and global job opportunities.',
  ]
  
  export default function YouCan() {
    return (
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="text-center">
                <SectionHeading type="primary">With Edulinkx, you can</SectionHeading>
            </div>
            <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden text-center sm:grid-cols-2 lg:grid-cols-3">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col py-4 px-5">
                
                  <TextWithCheckIcon>{stat}</TextWithCheckIcon>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    )
  }
  