/**
 * @param {array} apps
 * @param {string} app
 */

 function useApp(apps,app){
   apps.push(app)
   return apps
 }

 console.log(useApp(["clock","Twitter"], "Firefox" ));