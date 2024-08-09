import React, { Fragment, useState } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Minus, Plus } from 'lucide-react';

export default function Desc({ desc }: { desc: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Fragment>
      <Menu as="div" className="relative inline-block text-left w-full">
        <div>
          <MenuButton
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex w-full justify-between items-center gap-x-1.5 rounded-md bg-slate-100 px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300"
          >
            Description
            <span>{isOpen ? <Minus width={20} /> : <Plus width={20} />}</span>
          </MenuButton>
        </div>

        {isOpen && (
          <MenuItems
            transition
            className="absolute right-0 z-10 mt-2 w-full origin-top-right bg-transparent transition focus:outline-none"
          >
            <div className="py-1">
              <MenuItem>
                <div
                  className="block px-4 py-2 text-sm text-gray-700 bg-transparent"
                  dangerouslySetInnerHTML={{ __html: desc }}
                />
              </MenuItem>
            </div>
          </MenuItems>
        )}
      </Menu>
    </Fragment>
  );
}
