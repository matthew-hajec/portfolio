import React from 'react';
import GitHubCalendar from "../features/GitHubCalenedar";

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
    <section className="flex justify-center p-8">
      {isLoading ? (
        <div className="text-gray-500 dark:text-gray-400">Loading...</div>
      ) : (null)}
      
      <div style={{ display: isLoading ? 'none' : 'block' }} 
        className="
        overflow-x-auto
        p-6
        bg-white 
        rounded-lg
        shadow-lg
        "
      >
        <GitHubCalendar />
      </div>
    </section>
  )
}