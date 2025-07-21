'use client';

import { Suspense } from "react";
import { NotificationsSkeleton } from "@/components/NotificationSkeleton";
import NotificationList from "./NotificationList";

export default function NotificationsPage() {
  return (
    <div className="space-y-4">
      <Suspense fallback={<NotificationsSkeleton />}>
        <NotificationList />
      </Suspense>
    </div>
  );
}
