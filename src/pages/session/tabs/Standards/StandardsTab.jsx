const StandardsTab = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Standards & Practices</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="border rounded-xl p-4">
          <h4 className="font-medium mb-2">Industry Standards</h4>
          <p className="text-sm text-gray-600">
            Covers accepted industry standards, guidelines, and best practices.
          </p>
        </div>

        <div className="border rounded-xl p-4">
          <h4 className="font-medium mb-2">Best Practices</h4>
          <p className="text-sm text-gray-600">
            Demonstrates how professionals apply standards in real scenarios.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StandardsTab;
