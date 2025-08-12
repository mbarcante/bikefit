import sequelize from '@/config/database';

import './User';
import './Client';
import './Bike';
import './BikeType';
import './PostureEvaluation';
import './BikeFit';
import './ArticularAngles';
import './Rim';
import './Frame';

import { applyAssociations } from './Associations';

applyAssociations(sequelize);

export { sequelize };
export { User } from './User';
export { Client } from './Client';
export { Bike } from './Bike';
export { BikeType } from './BikeType';
export { PostureEvaluation } from './PostureEvaluation';
export { BikeFit } from './BikeFit';
export { ArticularAngles } from './ArticularAngles';
export { Rim } from './Rim';
export { Frame } from './Frame';
