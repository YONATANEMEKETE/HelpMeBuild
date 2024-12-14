'use client';

import React, { Fragment } from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from './ui/breadcrumb';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const BreadCrumbs = () => {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path !== '');

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathNames.map((path, index) => {
          const href = `/${pathNames.slice(0, index + 1).join('/')}`;
          const linkName = path[0].toUpperCase() + path.slice(1, path.length);
          const isLast = index === pathNames.length - 1;

          return (
            <Fragment key={linkName}>
              <BreadcrumbItem>
                {!isLast ? (
                  <BreadcrumbLink asChild>
                    <Link
                      href={href}
                      className="text-mytextlight text-xs min-[400px]:text-sm font-semibold font-body"
                    >
                      {linkName}
                    </Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage className="text-mytextlight text-sm font-semibold font-body">
                    {linkName}
                  </BreadcrumbPage>
                )}
              </BreadcrumbItem>
              {pathNames.length - 1 !== index && (
                <BreadcrumbSeparator aria-hidden="true">/</BreadcrumbSeparator>
              )}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbs;
