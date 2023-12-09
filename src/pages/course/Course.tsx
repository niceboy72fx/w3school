import { CourseLayout } from "../../layout/DefaultLayout";
import { Footer } from "../../layout/components/footer/Footer";
import "./course.scss";
const CourseContent: React.FC = () => {
  return (
    <CourseLayout>
      <section className="course mt-20">
        <div className="course-sider"></div>
        <div className="course-content">
          <div className="content-page"></div>
          <Footer />
        </div>
      </section>
    </CourseLayout>
  );
};

export default CourseContent;
