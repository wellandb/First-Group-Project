import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use the application default credentials
# Fetch the service account key JSON file contents
cred = credentials.Certificate('/home/csimage/GitRepos/first_group_project/private_key.json')
firebase_admin.initialize_app(cred, {
  'projectId': "parkez-database"
})

db = firestore.client()

doc_ref = db.collection(u'userData').document(u'janedoe')
doc_ref.set({
	u'email': u'janedoe@janedoe.janedoe',
    u'first_name': u'Jane',
    u'last_name': u'Doe',
    u'plate_number': u'XXXXXXX',
    u'disability_info': u'0'
})

doc_ref = db.collection(u'userTicket').document(u'exampleTicket')
doc_ref.set({
	u'userId': u'janedoe',
    u'parking_location': u'XX',
    u'start_time': u'00:00',
    u'end_time': u'00:00',
    u'price': u'5'
})

doc_ref = db.collection(u'carParkSpaces').document(u'exampleDoc')
doc_ref.set({
	u'carparkId': u'A',
    u'taken': u'0',
    u'isForDisabled': u'00'
})

doc_ref = db.collection(u'carParkData').document(u'exampleCarPark(A)')
doc_ref.set({
	u'name': u'A',
    u'location': u'xxxxx',
    u'parking_entrance': u'xxxxxxx',
    u'parking_exit': u'xxxxxxx',
    u'mall_entrance': u'xxxxxxx',
    u'mall_exit': u'xxxxxxx',
    u'total_spaces': u'100',
    u'disability_spaces': u'7'

})

