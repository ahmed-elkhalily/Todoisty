import collatedDataTitle from '../constants/index';

const collatedTaskExists = (sellectedProject) =>
  collatedDataTitle.find((data) => data.key === sellectedProject);

export default collatedTaskExists;
