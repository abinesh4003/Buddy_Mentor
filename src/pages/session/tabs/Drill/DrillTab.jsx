const DrillTab = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Drill</h2>

      <div className="border rounded-xl p-5 flex flex-col gap-3">
        <p className="text-sm text-gray-600">
          Answer the following question to complete this session.
        </p>

        <div className="border p-4 rounded-md">
          <p className="font-medium mb-2">
            What is the main purpose of this session?
          </p>

          <div className="flex flex-col gap-2 text-sm">
            <label><input type="radio" name="q1" /> To test memory</label>
            <label><input type="radio" name="q1" /> To explain fundamentals</label>
            <label><input type="radio" name="q1" /> To skip concepts</label>
          </div>
        </div>

        <button className="self-end px-4 py-1 bg-[#16385e] text-white rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
};

export default DrillTab;
