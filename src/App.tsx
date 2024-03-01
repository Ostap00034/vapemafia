const App = () => {
	return (
		<div className='w-full h-screen bg-[#161616] font-arial flex flex-col justify-center overflow-hidden'>
			<div className='w-full h-screen flex flex-col justify-center bg-cover bg-center bg-no-repeat bg-[url("/background.jpg")] relative'>
				<div className='w-full flex flex-col items-center py-[30px]'>
					<img className='w-[120px] h-[120px]' src='/logo.jpg' />
					<div className='pt-[20px] w-full flex flex-col items-center'>
						<div className='text-white text-[24px]'>
							<strong>VapeMafia</strong>
						</div>
						<div className='text-white text-[16px] pt-[10px]'>
							Так же мы есть в социальных сетях
						</div>
					</div>
				</div>
				<div className='py-[15px] px-[20px] text-white uppercase flex flex-col items-center gap-[10px] md:bg-gradient-to-t'>
					<a
						href='https://www.instagram.com/vapemafia_yakutsk_?igsh=eXYybTluYjdsZGE2&utm_source=qr'
						className='bg-black max-w-[600px] w-full h-[60px] rounded-3xl flex justify-center items-center font-medium'
					>
						instagram
					</a>
					<a
						href='https://t.me/VapeMafiaYkutsk'
						className='bg-black max-w-[600px] w-full h-[60px] rounded-3xl flex justify-center items-center font-medium'
					>
						telegram
					</a>
				</div>
				<footer className='flex flex-col items-center w-full z-10'>
					<div className='text-white text-[14px] h-[100px] pt-[30px] w-full flex justify-center items-end bg-gradient-to-t from-[#161616] to-[rgba(12, 12, 12, 0.8)]'>
						Пари и не парься
					</div>
					<div className='bg-[#161616] w-full flex flex-col items-center pb-[100px]'>
						<div className='text-[#848484] text-[14px] pt-[25px]'>
							Контактные данные
						</div>
						<div className='text-[#848484] pt-[20px] text-[14px]'>
							<strong>Гранд сити:</strong>{' '}
							<a href='tel:+79245676688' className='underline'>
								+7 (924) 567-66-88
							</a>
						</div>
						<div className='text-[#848484] text-[14px]'>
							<strong>Проспект Ленина 6:</strong>{' '}
							<a href='tel:+79241748871' className='underline'>
								+7 (924) 174-88-71
							</a>
						</div>
						<div className='text-[#848484] pt-[20px] text-[14px]'>
							Якутск, 2024
						</div>
					</div>
				</footer>
				<div className='fixed w-full h-[200px] bg-[#161616] bottom-0 z-0'></div>
			</div>
		</div>
	)
}

export default App
