import cn from 'classnames';
import Image from 'next/image';
import Tags from '../Tags';

function Project({ img, title, body, links, tags, flipped }) {
  return (
    <div
      className={cn(
        'flex flex-col',
        flipped ? 'md:flex-row' : 'md:flex-row-reverse'
      )}
    >
      <div className="w-full">
        <div className="shadow-lg md:mr-8 mb-6 md:mb-0">
          <Image
            src={img.src}
            width={img.width}
            height={img.height}
            layout="responsive"
            alt={img.alt}
          />
        </div>
      </div>
      <div className="w-full mt-4 md:mt-0">
        <div className="md:mr-8">
          <h6 className="font-semibold mb-4">{title}</h6>
          <p className="text-sm leading-6">{body}</p>
          <ul className="flex mt-4">
            {links?.map((link) => (
              <li className="mr-3" key={link.name}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Tags tags={tags} />
        </div>
      </div>
    </div>
  );
}

export default Project;
