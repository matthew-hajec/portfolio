import React from 'react';
import GitHubCalendar from "../features/GitHubCalenedar";
import Card from '../components/Card';
import Text from '../components/typography/Text';

export default function Stats() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Unfortunately, GitHubCalendar doesn't provide any infomration about its loading state.
    // Therefore, we use a simple timer and hope that the data loads within this time.
        
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card>
      <section className="flex justify-center">
        {isLoading ? (
          <div className="text-gray-500 dark:text-gray-400">Loading...</div>
        ) : (null)}

        <div className="w-full" style={{ display: isLoading ? 'none' : 'block' }}>
          {/* Everything in this block is mounted on page load, but hidden until loading is complete */}


          <Text elementType="h2" className="text-4xl font-semibold mb-8">
            Stats
          </Text>

          <Card>
            <div className='dark:text-white opacity-80'>
              <GitHubCalendar />
            </div>
          </Card>
        </div>
      </section>
    </Card>
  )
}