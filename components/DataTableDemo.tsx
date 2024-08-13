import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const DataTableDemo = () => {
  return (
    <div className="flex min-h-screen flex-1 flex-col gap-4 bg-muted/40 justify-center">
      <div className="mx-auto w-full max-w-3xl shadow-lg">
        <Tabs defaultValue="Week">
          <div className="flex-items-center">
            <TabsList>
              <TabsTrigger value="Week">Week</TabsTrigger>
              <TabsTrigger value="Month">Month</TabsTrigger>
              <TabsTrigger value="Year">Year</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="Week">
            <Card>
              <CardHeader className="px-7">
                <CardTitle className="text-2xl">Orders</CardTitle>
                <CardDescription>Recent Order from your store</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>John Doe</TableCell>
                      <TableCell>
                        <Badge className="text-xs" variant="secondary">
                          Delivered
                        </Badge>
                      </TableCell>
                      <TableCell>12/12/2021</TableCell>
                      <TableCell>$200</TableCell>
                    </TableRow>
                    <TableRow className="bg-accent">
                      <TableCell>John Doe</TableCell>
                      <TableCell>
                        {" "}
                        <Badge className="text-xs" variant="secondary">
                          Delivered
                        </Badge>
                      </TableCell>
                      <TableCell>12/12/2021</TableCell>
                      <TableCell>$200</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>John Doe</TableCell>
                      <TableCell>
                        {" "}
                        <Badge className="text-xs" variant="secondary">
                          Delivered
                        </Badge>
                      </TableCell>
                      <TableCell>12/12/2021</TableCell>
                      <TableCell>$200</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="Month">
            {" "}
            <p>wekk2</p>
          </TabsContent>
          <TabsContent value="Year">
            {" "}
            <p>wekk3</p>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DataTableDemo;
