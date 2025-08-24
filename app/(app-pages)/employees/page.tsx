const EmployeesPage = async () => {
  return (
    <>
      {Array.from({ length: 24 }).map((_, index) => (
        <div
          key={index}
          className="bg-muted/50 aspect-video h-12 w-full rounded-lg"
        />
      ))}
    </>
  );
};

export default EmployeesPage;
