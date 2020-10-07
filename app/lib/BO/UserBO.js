let models = require('../../models');
const Sequelize = require('sequelize');
const userDAO = require('../../dao/UserDAO');
const emailDAO = require('../../dao/EmailDAO');
const phoneDAO = require('../../dao/PhoneDAO');
const websiteDAO = require('../../dao/WebsiteDAO');
const cityDAO = require('../../dao/CityDAO');
const streetDAO = require('../../dao/StreetDAO');
const companyDAO = require('../../dao/CompanyDAO');
const zipcodeDAO = require('../../dao/ZipcodeDAO');
const geoDAO = require('../../dao/GeoDAO');
const contactDAO = require('../../dao/ContactDAO');
const addressDAO = require('../../dao/AddressDAO');
const logs = require('../../Utils/LogUtil');

async function createOrUpdate(usersApi) {

  return await new Promise(
    async (resolve, reject) => {
      await usersApi.forEach(async function (userapi) {
        if((userapi.address.suite.trim()).startsWith('Suite')){
          let emailObj = await models.Email.build({
            email: userapi.email
          });
          let email = await emailDAO.findOrCreate(emailObj);
          if(email.id == null) reject(false);

          let phoneObj = await models.Phone.build({
            phonenumber: userapi.phone
          });
          let phone = await phoneDAO.findOrCreate(phoneObj);
          if(phone.id == null) reject(false);

          let websiteObj = await models.Website.build({
            website: userapi.website
          });
          let website = await websiteDAO.findOrCreate(websiteObj);
          if(website.id == null) reject(false);

          let cityObj = await models.City.build({
            name: userapi.address.city
          });
          let city = await cityDAO.findOrCreate(cityObj);
          if(city.id == null) reject(false);

          let streetObj = await models.Street.build({
            name: userapi.address.street,
            cityid: city.id
          });
          let street = await streetDAO.findOrCreate(streetObj);
          if(street.id == null) reject(false);

          let companyObj = await models.Company.build({
            name: userapi.company.name,
            catchPhrase: userapi.company.catchPhrase,
            bs: userapi.company.bs,
          });
          let company = await companyDAO.findOrCreate(companyObj);
          if(company.id == null) reject(false);

          let zipcodeObj = await models.Zipcode.build({
            codenumber: userapi.address.zipcode
          });
          let zipcode = await zipcodeDAO.findOrCreate(zipcodeObj);
          if(zipcode.id == null) reject(false);

          let geoObj = await models.Geo.build({
            lat: userapi.address.geo.lat,
            lng: userapi.address.geo.lng
          });
          let geo = await geoDAO.findOrCreate(geoObj);
          if(geo.id == null) reject(false);

          let contactObj = await models.Contact.build({
            emailid: email.id,
            phoneid: phone.id,
            websiteid: website.id
          });
          let contact = await contactDAO.findOrCreate(contactObj);
          if(contact.id == null) reject(false);

          let addressObj = await models.Address.build({
            streetid: street.id,
            suite: userapi.address.suite,
            zipcodeid: zipcode.id,
            geoCodeid: geo.id,
          });
          let address = await addressDAO.findOrCreate(addressObj);
          if(address.id == null) reject(false);

          let userapp = await models.Userapp.build({
            id: userapi.id,
            name: userapi.name,
            username: userapi.username,
            addressid: address.id,
            companyid: company.id,
            contactid: contact.id,
          });
          const userappCreated = await userDAO.createOrUpdateDataFromApi(userapp);
          if(userappCreated.id == null) reject(false);
        }
      });
      resolve(true);
    });
}


module.exports = {createOrUpdate};
