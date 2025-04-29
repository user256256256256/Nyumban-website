import { Link } from 'react-router-dom'

const BlogCard = ({ title, date, author, authorImage, description, link }) => {
  const svgBackground = `url("data:image/svg+xml;utf8,${encodeURIComponent(`
    <svg width="762" height="836" viewBox="0 0 762 836" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="762" height="836" fill="#095272"/>
    <path d="M776 228.5C754.779 278.75 707.308 361.336 678.993 408.981C675.447 414.949 671.128 420.721 667.822 426.767C662.602 436.314 658.945 450.959 660.293 461.263C663.443 485.344 696.312 506.5 720.522 517.845C737.613 525.854 752.508 536.98 771.523 542.081" stroke="white" stroke-opacity="0.8" stroke-width="3" stroke-linecap="round"/>
    <path d="M766.5 126.5C739.097 191.71 658.076 349.258 621.512 411.089C616.932 418.833 611.354 426.323 607.085 434.17C600.345 446.559 595.623 465.564 597.363 478.936C601.431 510.186 643.876 537.641 675.14 552.363C697.21 562.756 739.445 588.381 764 595" stroke="white" stroke-opacity="0.8" stroke-width="3" stroke-linecap="round"/>
    <path d="M763 12.5C722.276 109.52 632.766 300.027 578.427 392.019C571.622 403.54 563.332 414.684 556.988 426.358C546.971 444.791 539.953 473.066 542.54 492.962C548.584 539.456 611.663 580.303 658.125 602.208C690.923 617.67 727.009 643.152 763.5 653" stroke="white" stroke-opacity="0.8" stroke-width="3" stroke-linecap="round"/>
    </svg>
  `)}`

  return (
    <Link
    to={link}
    className="block rounded shadow hover:shadow-md transition relative overflow-hidden bg-navy-blue hover:scale-105"
    >
    <div
        className="relative z-10 w-full h-64 flex flex-col justify-center items-center px-4 text-center text-primary"
        style={{
        backgroundImage: svgBackground,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        }}
    >
        <h3 className="text-[24px] font-semibold mb-2">{title}</h3>
        <p className="text-sm ">{description}</p>
        <div className="absolute inset-0  opacity-30 z-0" />
    </div>

    <div className="flex items-center gap-3 p-4 z-10 relative ">
        <img
        src={authorImage}
        alt={author}
        className="w-10 h-10 object-cover"
        />
        <div>
        <p className="text-sm font-medium text-primary">{author}</p>
        <p className="text-xs text-slate-gray">{date}</p>
        </div>
    </div>
    </Link>

  )
}

export default BlogCard
