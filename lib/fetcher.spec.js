const expect = require('chai').expect;
const assert = require('chai').assert;

const ftch = require('./fetcher.js');

describe("fetchDealWithInventoryProductUUID", function() {
  // it("Fetch good mp_uuid", function() {
  //   const _fetchSomethingStub = this.sandbox.stub(dcs_fetcher, '_fetchSomething')
  //   .callsFake(function(options){
  //     return new Promise(function(resolve, reject){
  //       if( options.path.startsWith("/deal_catalog/v1/deals/lookupId?")) {
  //         resolve({options:options, response:{statusCode:200}, payload:mp_lookup, error:null});
  //       } else if (options.path.startsWith("/deal_catalog/v2/deals/")) {
  //         resolve({options:options, response:{statusCode:200}, payload:deal, error:null});
  //       } else {
  //         reject( new Error(`Bad URL sent: [${options.path}]`));
  //       }
  //     });
  //   });
  //
  //   return dcs_fetcher.fetchDealWithInventoryProductUUID(null, "00002753-7abc-4986-d2ed-7da4dc40d265")
  //   .then((response) => {
  //     expect(response.options.path).to.equal('/deal_catalog/v2/deals/00002753-7abc-4986-d2ed-7da4dc40d265?clientId=deal-catalog-team');
  //     expect(response.response).to.deep.equal({statusCode:200});
  //     expect(response.payload).to.deep.equal(JSON.parse(deal));
  //     expect(response.error).to.be.null;
  //   });
  // });
});
