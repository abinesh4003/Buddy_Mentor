const LessonsTab = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Lessons Learnt</h2>

      <ul className="list-disc pl-6 text-sm text-gray-600 space-y-2">
        <li>Key takeaways from the session</li>
        <li>Important concepts to remember</li>
        <li>Common mistakes to avoid</li>
        <li>Practical applications</li>
      </ul>
    </div>
  );
};

export default LessonsTab;
