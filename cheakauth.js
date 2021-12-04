const token = localStorage.getItem("token")
if (!token || token == null) {
  window.location.replace("/login.html")
} 