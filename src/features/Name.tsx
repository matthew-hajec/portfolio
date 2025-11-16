import Card from '../components/Card';

export default function Name() {
  return (
    <section className="flex justify-center mb-10">
      <Card>
        <span
          className="
            text-6xl sm:text-7xl font-bold font-['Stack_Sans_Notch']
            bg-linear-to-r from-blue-700 via-purple-600 to-pink-500
            dark:from-blue-500 dark:via-purple-600 dark:to-pink-400
            bg-clip-text text-transparent animate-gradient-pan
            drop-shadow-[0_8px_30px_rgba(79,70,229,0.35)]
          "
          style={{ backgroundSize: '220% 100%' }}
        >
          Matthew Hajec
        </span>

        <div className="hidden sm:flex flex-col items-start text-xs tracking-[0.6em] uppercase text-gray-500 dark:text-gray-300">
          <span className="mt-0.5 opacity-90">Software Engineering Portfolio</span>
        </div>
      </Card>
     </section>
  );
}