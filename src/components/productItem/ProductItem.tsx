function ProductItem() {
	return (
		<div className="shadow border rounded pb-2">
			<img className="rounded-t" src="/public/car.webp" alt="car-img" />
			<div className="flex justify-between flex-row-reverse p-4 mt-2">
				<h3>عنوان محصول</h3>
				<span>55,000 تومان</span>
			</div>
			<div className="p-4 mt-1">
				<p className="line-clamp-2 text-right">
					لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و
					با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه
					و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
					تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
					کاربردی می باشد
				</p>
			</div>
		</div>
	);
}

export default ProductItem;
