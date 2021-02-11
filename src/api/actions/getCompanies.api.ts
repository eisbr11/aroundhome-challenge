import companyServer from '../server/company.api';

const getCompanies = () => companyServer.get(
  '/companies',
).then((response) => response.data);

export default getCompanies;
