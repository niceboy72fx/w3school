import { Button, Result } from "antd";
import { useNavigate } from "react-router";

export default function NotFound404() {
  const navigate = useNavigate();
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button
            className="bg-green-500 hover:none"
            type="primary"
            onClick={() => {
              navigate("/");
            }}
          >
            Back to HomePage
          </Button>
        }
      />
    </div>
  );
}
