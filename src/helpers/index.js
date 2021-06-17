import { collatedDataTitle } from '../constants/index';

export const collatedTaskExists = (sellectedProject) =>
  collatedDataTitle.find((data) => data.key === sellectedProject);
