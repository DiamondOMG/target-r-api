import styles from "../styles/CatLoader.module.css";

const CatLoader = () => {
	return (
		<div className={styles.box}>
			<h1 className={styles.intro}>
				Cat Loader
				<small>Loading animation of a cat</small>
			</h1>
			<div className={styles.cat}>
				<div className={styles.cat__body}></div>
				<div className={styles.cat__body}></div>
				<div className={styles.cat__tail}></div>
				<div className={styles.cat__head}></div>
			</div>
			<blockquote className={styles.info}>
				Inspired from{" "}
				<a
					href="https://dribbble.com/domaso"
					target="_blank"
					rel="noopener noreferrer"
				>
					domaso
				</a>
				's dribbble:{" "}
				<a
					href="https://dribbble.com/shots/3197970-Loading-cat"
					target="_blank"
					rel="noopener noreferrer"
				>
					Loading cat
				</a>
				<br />
				Fork from{" "}
				<a
					href="https://www.facebook.com/tenyoku8478"
					target="_blank"
					rel="noopener noreferrer"
				>
					林天翼
				</a>
				's{" "}
				<a
					href="https://www.csie.ntu.edu.tw/~b02902062/load_cat/"
					target="_blank"
					rel="noopener noreferrer"
				>
					load cat
				</a>
				<br />
				Via:{" "}
				<a
					href="https://www.facebook.com/groups/f2e.tw/permalink/1180443255326371/?comment_id=1180487985321898"
					target="_blank"
					rel="noopener noreferrer"
				>
					FB comment
				</a>
			</blockquote>
		</div>
	);
};

export default CatLoader;
