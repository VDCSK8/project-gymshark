import styles from "./Brands.module.scss";
import Brand1 from "../../assets/img/Brand1.png";
import Brand21 from "../../assets/img/Brand2.1.png";
import Brand22 from "../../assets/img/Brand2.2.png";
import Brand3 from "../../assets/img/Brand3.png";

// icon
import CheckIcon from "../../assets/icon/checkIcon.svg";
import Card from "../../assets/icon/card.svg";

function Brands() {
  return (
    <div className={styles.brands}>
      {/* item1 */}
      <div className={styles.brandsItem1}>
        <div className={styles.container}>
          <div className={styles.brandsContent}>
            <h1 className={styles.brandsTitle}>
              WHO ARE YOU ? <br />
              WE ARE GYMSHARK !
            </h1>

            <p className={styles.brandsDesc}>
              Gymshark được thành lập năm 2012 tại Anh bởi Ben Francis, khi đó
              mới 19 tuổi, vừa là sinh viên vừa làm nhân viên giao hàng pizza.
              Thương hiệu khởi đầu từ một startup nhỏ hoạt động trong nhà để xe,
              bán đồ tập gym online. Nhận thấy nhu cầu lớn về trang phục tập
              luyện ôm dáng, linh hoạt và thẩm mỹ, Ben Francis quyết định tập
              trung hoàn toàn vào thời trang thể thao. Nhờ chiến lược tận dụng
              mạng xã hội và influencer fitness, Gymshark nhanh chóng phát triển
              và trở thành một trong những thương hiệu activewear tăng trưởng
              nhanh nhất thế giới, hiện diện tại hơn 180 quốc gia.
            </p>
          </div>
          <div className={styles.brandsImage}>
            <img src={Brand1} alt="Gymshark brand" />
          </div>
        </div>
      </div>

      {/* item2 */}
      <div className={styles.brandsItem2}>
        <div className={styles.container}>
          <div className={styles.brandsImage}>
            <img src={Brand21} className={styles.imgMain} />
            <img src={Brand22} className={styles.imgOverlay} />
            <img src={Card} className={styles.imgCard} />
          </div>
          <div className={styles.brandsContent}>
            <h1 className={styles.brandsTitle}>
              GYMSHARK'S <br />
              MAJOR TURNING PONT
            </h1>

            <p className={styles.brandsDesc}>
              Từ việc tận dụng mạng xã hội và influencer fitness trên YouTube,
              Instagram – thay vì quảng cáo truyền thống. Nhờ đó, thương hiệu
              nhanh chóng lan tỏa mạnh mẽ trong cộng đồng tập luyện toàn cầu.
              <br />
              <br />
              Chỉ sau vài năm, Gymshark đã phát triển thành một trong những
              thương hiệu activewear tăng trưởng nhanh nhất thế giới, có mặt tại
              hơn 180 quốc gia, với hàng triệu khách hàng trung thành.
            </p>
          </div>
        </div>
      </div>

      {/* item3 */}
      <div className={styles.brandsItem3}>
        <div className={styles.container}>
          <div className={styles.brandsContent}>
            <h1 className={styles.brandsTitle}>
              TODAY, GYMSHARK <br />
              REPRESENTS
            </h1>

            <p className={styles.brandsDesc}>
              Gymshark mang đến trang phục tập luyện hiện đại, tối giản và hiệu
              suất cao, giúp bạn tự tin vận động, nâng cao hiệu quả tập luyện và
              theo đuổi lối sống khỏe mạnh mỗi ngày.
            </p>

            {/* checkicon */}
            <div className={styles.brandsFeatures}>
              <div className={styles.featureItem}>
                <img src={CheckIcon} className={styles.checkIcon} alt="" />
                <span className={styles.featureText}>Tối ưu hiệu suất</span>
              </div>

              <div className={styles.featureItem}>
                <img src={CheckIcon} className={styles.checkIcon} alt="" />
                <span className={styles.featureText}>
                  Thoáng khí, linh hoạt
                </span>
              </div>

              <div className={styles.featureItem}>
                <img src={CheckIcon} className={styles.checkIcon} alt="" />
                <span className={styles.featureText}>Cho người tập gym</span>
              </div>

              <div className={styles.featureItem}>
                <img src={CheckIcon} className={styles.checkIcon} alt="" />
                <span className={styles.featureText}>Tin dùng toàn cầu</span>
              </div>
            </div>
          </div>
          <div className={styles.brandsImage}>
            <img src={Brand3} alt="Gymshark brand" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Brands;
