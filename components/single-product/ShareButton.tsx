'use client';
import { Popover, PopoverContent, PopoverTrigger, } from '@/components/ui/popover';
import { LuShare2 } from 'react-icons/lu';

import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from 'react-share';
import { Button } from '../ui/button';

function ShareButton({productId, name}: { productId: string; name: string }) {
  const url = process.env.NEXT_PUBLIC_WEBSITE_URL;
  const shareLink = `${url}/products/${productId}`;

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline' size='icon' className='p-2'>
          <LuShare2/>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        side='top'
        align='end'
        sideOffset={10}
        className='flex items-center gap-x-2 justify-center w-full'
      >
        <TwitterShareButton url={shareLink} title={name}>
          <TwitterIcon size={32} round/>
        </TwitterShareButton>
        <FacebookShareButton url={shareLink} title={name}>
          <FacebookIcon size={32} round/>
        </FacebookShareButton>
        <EmailShareButton url={shareLink} subject={name}>
          <EmailIcon size={32} round/>
        </EmailShareButton>
      </PopoverContent>
    </Popover>
  )
}

export default ShareButton;
