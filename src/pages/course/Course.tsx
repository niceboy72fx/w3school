import { Footer } from "../../layout/components/footer/Footer";
import "./course.scss";
const CourseContent: React.FC = () => {
  return (
    <section className="course mt-20">
      <div className="course-sider"></div>
      <div className="course-content">
        <div className="content-page"></div>
        <Footer />
      </div>
    </section>
  );
};

export default CourseContent;
