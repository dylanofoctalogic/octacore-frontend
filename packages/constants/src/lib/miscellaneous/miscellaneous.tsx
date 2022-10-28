const PROJECT_STATUSES = [
  { id: 0, name: 'Cancelled' },
  { id: 1, name: 'Ongoing' },
  { id: 2, name: 'On Hold' },
  { id: 3, name: 'Completed' },
  { id: 4, name: 'Maintenance' },
];

const processProjectStatus = (status: number) => {
  const foundStatus = PROJECT_STATUSES.find(
    (projectStatus) => projectStatus.id === status
  );
  return foundStatus?.name || 'N.A';
};

export { PROJECT_STATUSES, processProjectStatus };
