const SessionTitleTab = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Session Title</h2>

      <div className="border rounded-xl p-6">
        <p className="text-sm text-gray-600">
          This section explains the overall title and objective of the session.
          The mentor introduces what the mentee will learn and why this session
          is important.
        </p>
      </div>
    </div>
  );
};

export default SessionTitleTab;
