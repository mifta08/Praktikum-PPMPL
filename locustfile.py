from locust import HttpUser, task, between

class WebsiteUser(HttpUser):
    wait_time = between(1, 5)  

    @task
    def get_users(self):
        self.client.get("/users")
        

    @task(2)
    def create_user(self):  # Mengirim permintaan POST untuk membuat user baru
        
        users= [
           { "name": "Miftahul Rizqha", "username": "miw", "email": "rizqhaamifta@gmail.com"}
            ]
        
        for user in users:
            self.client.post("/users",json=user)
            
    @task(3)
    def get_user(self):
        self.client.post("/users/1")
        
    @task(4)
    def update_user(self):  # Mengirim permintaan PUT untuk memperbarui user
       
        
        self.client.put("/users/1", json={
            "name": "siapa aja",
            "username": "iiii",
            "email": "siapaa@example.com"
        })
        
        
    @task(5)
    def delete_user(self):    # Mengirim permintaan DELETE untuk menghapus user
       
        
        self.client.delete("/users/1")
        
        
    

