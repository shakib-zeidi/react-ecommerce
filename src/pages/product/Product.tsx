import { useParams } from "react-router-dom";
import Container from "../../components/container/Container";
import Button from "../../components/button/Button";

function Product() {
	const params = useParams();

	return (
		<div>
			<Container>
				<div className="h-96 shadow mt-4 grid grid-cols-12">
					<div className="col-span-7 p-4 rounded-l">
						<h1 className="text-right">عنوان محصول</h1>
						<div>
							<p className="text-right">قیمت : 55,000 تومان</p>
							<p className="text-right">
								ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
								صنعت چاپ و با استفاده از طراحان گرافیک است
								چاپگرها و متون بلکه روزنامه و مجله در ستون و
								سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
								مورد نیاز و کاربردهای متنوع با هدف بهبود
								ابزارهای کاربردی می باشدورم ایپسوم متن ساختگی با
								تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
								طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
								مجله در ستون و سطرآنچنان که لازم است و برای
								شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع
								با هدف بهبود ابزارهای کاربردی می باشدورم ایپسوم
								متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
								با استفاده از طراحان گرافیک است چاپگرها و متون
								بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
								است و برای شرایط فعلی تکنولوژی مورد نیاز و
								کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می
								باشدورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
								از صنعت چاپ و با استفاده از طراحان گرافیک است
								چاپگرها و متون بلکه روزنامه و مجله در ستون و
								سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی
								مورد نیاز و کاربردهای متنوع با هدف بهبود
								ابزارهای کاربردی می باشد
							</p>
						</div>
					</div>
					<div className="col-span-5 shadow rounded-br flex flex-col justify-between">
						<img
							className="max-w-full h-full rounded-tr"
							src="/public/car.webp"
							alt="car-img"
						/>
						<Button className="rounded-br p-2 w-full" variant="primary">Add To Cart</Button>
					</div>
				</div>
			</Container>
		</div>
	);
}

export default Product;
