import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use the application default credentials
cred = credentials.ApplicationDefault()
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
