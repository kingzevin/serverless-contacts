all: update

update: 
	./rezip.sh contacts
	wsk -i action update /guest/sharelatex/contacts contacts.zip --kind  nodejs:10 --web raw


