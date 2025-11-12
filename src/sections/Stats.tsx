import React from 'react';
import GitHubCalendar from "../features/GitHubCalenedar";
import Card from '../components/Card';

export default function Stats() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // Unfortunately, GitHubCalendar doesn't provide any infomration about its loading state.
    // Therefore, we use a simple timer and hope that the data loads within this time, not a great solution,
    // but w
    
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

        <div style={{ display: isLoading ? 'none' : 'block' }}>
          {/* Everything in this block is mounted on page load, but hidden until loading is complete */}
          <h2 className='
            font-bold underline text-2xl
            text-gray-700 dark:text-gray-300
            mb-4
          '>GitHub Contributions</h2>

          <div className="
            overflow-x-auto
            p-6
            bg-white 
            dark:rounded-lg
            dark:shadow-lg
            "
          >
            <GitHubCalendar />
          </div>
        </div>
      </section>
    </Card>
  )
}