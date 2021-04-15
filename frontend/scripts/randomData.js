key = {
    "type": "service_account",
    "project_id": "parkez-database",
    "private_key_id": "43451c32d64e888469ec6fd1de74e2ae5d2b212c",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCk179sSZheoRUT\noRnovoYdGiBid6ObhSa+PZnmpIaLJMPacognhi58CfWyE8tjRQJh+RHvk3T3R2OR\nxX291jFToGVVnOQ9cxFYmHxqPpx/PW+JoFJ7P4AaGgPl6+VSTtfK2FaUhg4qFWRN\nGkYRM7Q11ojC6UMVeFZ2lcvJeIZnDoZ8fToOljegHEUkI/jTQutCMMGNUmNPGtc6\ndvoSZKDNnJWd2O609tGFBROpeq9YUchAgIm7F3xd8+XEFjgWKOJHmF4KoYbT1wH8\nRJMnF5w0F4bPN7IEOZD6dC8Uh8+eCJGn7BX78FV2mAYA+tKdM5KLf0QJBNmdFULX\nV++8o1XBAgMBAAECggEAAz29JTTuCqMVYs7R6P8Hn6TdRCWUEVr1Ew9R0MFYmX3K\n+A2bQPB+rRbipNi5lz8XhLOjNz6DMaWB5XwOzkYnr1Xbbp6CG/WaPrXo14uM0Jeo\n2ZNOBXkoww3SsjLVzhN//LYNco6PbFZoikRc++00IU1ExruHA4uoYsNS2XUSndrl\nxPSwLkbu24MIjAyM5TwK9ewayOleLtXbIIm/KqGD7m2fRU5HC85lMoREKfrW5FYa\nmfWhmEeE02xjo5ez3z7gN94XFMk247SfQzU+NAlFQDiHudwbdAw5VrdcsojfMWix\nmYDwKmf7IBJR4AxUDef4tGosJvp1gusdLV6D3Tf+PQKBgQDY3OwKIBCus97OmKps\nUrmCeuD4LsuslegG9wkVegLKDKIzpi0E4uBeM2Y9aCdDjz8WHU3m/t+mrzhAe/R+\nuizcmSjhaFuLv/pzLpNEMsJ0eBSpFxvBgF7enacD+5jfbAfl2+rEB1lGH5kGfwqx\nXb4TGyoU/nmfgOPrMlP9yXBQXwKBgQDCl31pq7UwEiCa7IX04kCot0lJ8TC2cdSI\n0xbbV4WG0nhG7G/3O9lM9EZgCkt/+YIozrgHUTvyLr/20U1CNc+1CNirn3kaKita\n06Gw653PRUC9skMDrOIW+nta9NyivVREh/6awea9AKWwU3Mb/wvsyXBJypJIGcOU\nqHQvMReN3wKBgQCrkAMwc3OfMm93E/HnZn6aSioGTccVzzZTpEXMds0UGXCM2c9N\nyUrlW1ZsCCTf3shy71X9A+/dh0tCQI4JX7I0Bvr/cDbUVVmGm/cngdyylXkK2Fw9\n9heXmDNUBExJnMaWwyd0U7f9sOu35vOHo/jGVrwxBa0kUax+Gj+2TBGNkwKBgBkw\ny0d2twn2Dsp/fAfrkjtFHvO3iXrU2ZKs4PScK+j8Lh3gVc5HrSXNKZ8dNhDnF/Z4\nbFJmLcB4VNl61umPVcg10PbGukKs2tfzNadVmSRP7sWf4hUDuHEJFBb+Q+G9aL9G\na6tVFq24+7oL04b4SW7p1ON4md9DlpIUDJZfYJE5AoGAYnj7DbCTmyuqtHPOPWj8\nCNkKaf0KNPLRWH7bdZlCX/CKFuLu2R/HS7MYwCj7pNBxnhnUofyvBePe7O1TLpFH\nH1jawSmT6CTfWLfj0iFOwuQ+AwdZmKQTsEZ3XOvmN96kqWWQEeKS8z7gsn7u00t9\nczkhHdwJquIeUR1KXf2LLYo=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-bekde@parkez-database.iam.gserviceaccount.com",
    "client_id": "106739194285695589887",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-bekde%40parkez-database.iam.gserviceaccount.com"
  }


function randomData(grid, gridEncoding) {


    const rows = grid.length, cols = grid[0].length;

    const admin=require('firebase-admin');
    var serviceAccount = require(key);
    admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
    });

    const db=admin.firestore();

    async function getDocument(db){
        var carParkRef=db.collection("carParkData").doc("exampleCarPark(A)");
        const doc = await carParkRef.get();
        if (!doc.exists) {
        console.log('No such document!');
        } else {
        console.log('Document data:', doc.data());
        }

    }

    getDocument(db);

    randomCars = [];


    function addCars(){
        for(i=0; i<2; i++){
            check = False;
            while(not(check)){
                row = Math.floor(Math.random() * rows);
                collumn = Math.floor(Math.random() * cols);
                if (grid[row,collumn] == gridEncoding.freeNormal){
                    check = True;
                    grid[row,collumn]= gridEncoding.takenNormal;
                    
                    // Update database here
                    updateSpace(row, collumn, False, gridEncoding, True);
                    randomCars.append((row,collumn))

                }
            }
        }
        startDrawing(grid);
    }

    function removeCar(){
        check = False;
        while(not(check)){
            (row,collumn) = Math.floor(Math.random() * randomCars.length());

            if (grid[row,collumn] == gridEncoding.takenNormal){
                check = True;
                grid[row,collumn]= gridEncoding.freeNormal;
                    
                // Update database here
                updateSpace(row, collumn, False, gridEncoding, False);
            }
        }
        
        startDrawing(grid);
    }
    
    // Set interval to add car every minute
    setInterval(addCars(), 60 * 1000); // 60 * 1000 milsec

    // Set interval to remove car every few minutes to stop overcrowding
    setInterval(removeCar(), 60 * 1000 * 2); // 60 * 1000 milsec


}