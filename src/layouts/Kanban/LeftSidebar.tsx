import { LeftSidebarProps } from './interface';
import { LeftSidebarWrapper } from './style';

export default function LeftSidebar({ children }: LeftSidebarProps) {
  return <LeftSidebarWrapper>{children}</LeftSidebarWrapper>;
}
