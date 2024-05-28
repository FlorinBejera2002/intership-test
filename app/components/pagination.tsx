
const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
 const pagesCount = Math.ceil(items / pageSize); // 100/10

 if (pagesCount === 1) return null;
 const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
console.log(pages)

 return (
   <div>
     <div>Pagination</div>
   </div>
 );
};

export default Pagination;
