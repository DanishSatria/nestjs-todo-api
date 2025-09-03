# 📌 API Todo List - NestJS

API ini adalah implementasi sederhana Todo List menggunakan **NestJS** tanpa database.  
Semua data disimpan di dalam array agar mudah dipahami dan diuji menggunakan **Postman**.  
Proyek ini dibuat untuk memenuhi tugas pembuatan API Todo List, dengan endpoint CRUD dasar.

---

## 👤 Identitas
- Nama: **Danish Satria Indie**  
- Kelas: **XI RPL 1**

---

## 📖 Deskripsi
API Todo List sederhana menggunakan **NestJS** tanpa database.  
Data disimpan di dalam array dan dapat diakses melalui endpoint CRUD.

---

## ⚡ Fitur Utama
- **GET /todos** → Menampilkan semua todo  
- **GET /todos/:id** → Menampilkan todo berdasarkan ID  
- **POST /todos** → Menambahkan todo baru  
- **PUT /todos/:id** → Mengupdate todo berdasarkan ID  
- **DELETE /todos/:id** → Menghapus todo berdasarkan ID  

---

## 🗂️ Screenshoot
<img width="1920" height="1080" alt="Screenshot 2025-09-03 220330" src="https://github.com/user-attachments/assets/0320a256-e247-4ae1-962f-e82833830c2c" />
<img width="1920" height="1080" alt="Screenshot 2025-09-03 220339" src="https://github.com/user-attachments/assets/b3a9129b-addf-4b9c-bb5f-1c8244c25f8a" />
<img width="1920" height="1080" alt="Screenshot 2025-09-03 220347" src="https://github.com/user-attachments/assets/8deae9a8-b9c4-4a18-b5cd-972465258a8c" />
<img width="1920" height="1080" alt="Screenshot 2025-09-03 220357" src="https://github.com/user-attachments/assets/7cedb10e-4314-4020-a901-788b7305ede4" />
<img width="1920" height="1080" alt="Screenshot 2025-09-03 220409" src="https://github.com/user-attachments/assets/55613154-830a-47c3-833a-68cfee91d5ba" />

## 🗂️ Struktur Data
Setiap todo memiliki struktur data berikut:
```json
{
  "id": number,
  "title": string,
  "status": "pending" | "done"
}


