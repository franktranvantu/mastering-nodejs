# Exercise 1

```bash
docker cp /hostfile  (container_id):/(to_the_place_you_want_the_file_to_be)
mongoimport --db mongo-exercises --collection courses --authenticationDatabase admin --username admin --password admin --drop --file data.json --jsonArray
```