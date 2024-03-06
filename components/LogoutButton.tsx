export default function Logout() {
  return (
    <form method="post" action="/auth/logout">
      <button type="submit" className="btn btn-primary">
        Logout
      </button>
    </form>
  );
}
